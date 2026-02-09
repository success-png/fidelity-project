import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'
import { validationResult } from 'express-validator'

const generateToken = (userId) => {
  // Ensure JWT_SECRET is set in production
  const secret = process.env.JWT_SECRET
  if (!secret && process.env.NODE_ENV === 'production') {
    throw new Error('JWT_SECRET must be set in production')
  }
  // Use a development fallback only in development mode
  const finalSecret = secret || 'dev-secret-key-do-not-use-in-production'
  
  return jwt.sign(
    { userId },
    finalSecret,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  )
}

export const register = async (req, res, next) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      })
    }

    const { username, email, password, firstName, lastName, phone, accountType, investmentGoal } = req.body

    // Check if user exists
    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    })

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User with this email or username already exists'
      })
    }

    const user = new User({
      username,
      email,
      password,
      firstName,
      lastName,
      phone,
      accountType,
      investmentGoal
    })

    await user.save()

    const token = generateToken(user._id)

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: user.toJSON(),
      token
    })
  } catch (error) {
    next(error)
  }
}

export const login = async (req, res, next) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      })
    }

    const { username, password } = req.body

    const user = await User.findOne({ username }).select('+password')

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid username or password'
      })
    }

    const isMatch = await user.comparePassword(password)

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid username or password'
      })
    }

    if (!user.isActive) {
      return res.status(401).json({
        success: false,
        message: 'Account is deactivated'
      })
    }

    user.lastLogin = new Date()
    await user.save()

    const token = generateToken(user._id)

    res.json({
      success: true,
      message: 'Login successful',
      user: user.toJSON(),
      token
    })
  } catch (error) {
    next(error)
  }
}

export const logout = async (req, res, next) => {
  try {
    // In a real app, you might want to blacklist the token
    res.json({
      success: true,
      message: 'Logged out successfully'
    })
  } catch (error) {
    next(error)
  }
}

export const getProfile = async (req, res, next) => {
  try {
    res.json({
      success: true,
      user: req.user
    })
  } catch (error) {
    next(error)
  }
}

export const updateProfile = async (req, res, next) => {
  try {
    const { firstName, lastName, phone } = req.body

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { firstName, lastName, phone },
      { new: true, runValidators: true }
    )

    res.json({
      success: true,
      message: 'Profile updated successfully',
      user
    })
  } catch (error) {
    next(error)
  }
}
