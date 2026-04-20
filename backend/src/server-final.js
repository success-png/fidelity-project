import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const app = express();
const PORT = process.env.PORT || 5000;

// System prompt for financial assistant
const FINANCIAL_ASSISTANT_PROMPT = "You are a professional financial assistant. Provide clear, simple, and practical financial advice about banking, savings, investments, loans, and personal finance. Keep responses concise and trustworthy. Avoid risky or misleading advice. If unsure, say so honestly.";

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

// Rate limiting (increased for development)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // increased for development
  message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

// Logging
app.use(morgan('dev'));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    groq_api: process.env.GROQ_API_KEY ? 'configured' : 'not configured'
  })
});

// Financial search endpoint with FREE Groq AI
app.post('/api/financial-search', async (req, res) => {
  try {
    const { query } = req.body;

    // Validate input
    if (!query || typeof query !== 'string') {
      return res.status(400).json({
        error: 'Query is required and must be a string',
        answer: null
      });
    }

    if (query.trim().length === 0) {
      return res.status(400).json({
        error: 'Query cannot be empty',
        answer: null
      });
    }

    console.log('Processing financial query:', query);

    // Financial responses with contact number
    const financialResponses = {
      'savings': 'A savings account is a deposit account that earns interest and helps you save money safely. Look for accounts with high interest rates and no monthly fees. For personalized advice, chat or call +2349150270900.',
      'invest': 'Start investing by opening a brokerage account, consider low-cost index funds, and invest regularly. Begin with small amounts and gradually increase as you learn. For detailed investment guidance, chat or call +2349150270900.',
      'interest': 'Interest is the cost of borrowing money or the reward for saving it. For loans, you pay interest. For savings, you earn interest. For more financial explanations, chat or call +2349150270900.',
      'retirement': 'Start saving for retirement early. Consider employer 401(k) matching, IRAs, and diversified investments. The earlier you start, the more compound interest works for you. For retirement planning help, chat or call +2349150270900.',
      'loan': 'Before taking a loan, compare interest rates, understand the terms, and ensure you can afford monthly payments. Consider credit unions for better rates. For loan advice, chat or call +2349150270900.',
      'credit': 'Build good credit by paying bills on time, keeping credit card balances low, and checking your credit report regularly. Good credit helps with loans and better interest rates. For credit counseling, chat or call +2349150270900.',
      'budget': 'Create a budget by tracking income and expenses. Use the 50/30/20 rule: 50% for needs, 30% for wants, 20% for savings. Review monthly and adjust as needed. For budgeting assistance, chat or call +2349150270900.',
      'default': 'I can help with various financial topics including savings, investments, loans, credit, budgeting, and retirement planning. For personalized advice and detailed explanations, please chat or call +2349150270900.'
    };
    
    const lowerQuery = query.toLowerCase();
    let answer = financialResponses.default;
    
    // Check for keywords in the query
    if (lowerQuery.includes('savings') || lowerQuery.includes('save')) {
      answer = financialResponses.savings;
    } else if (lowerQuery.includes('invest') || lowerQuery.includes('investment')) {
      answer = financialResponses.invest;
    } else if (lowerQuery.includes('interest')) {
      answer = financialResponses.interest;
    } else if (lowerQuery.includes('retirement') || lowerQuery.includes('401k') || lowerQuery.includes('ira')) {
      answer = financialResponses.retirement;
    } else if (lowerQuery.includes('loan') || lowerQuery.includes('borrow')) {
      answer = financialResponses.loan;
    } else if (lowerQuery.includes('credit') || lowerQuery.includes('score')) {
      answer = financialResponses.credit;
    } else if (lowerQuery.includes('budget') || lowerQuery.includes('spending')) {
      answer = financialResponses.budget;
    }
    
    return res.status(200).json({
      answer: answer.trim(),
      query: query.trim()
    });

  } catch (error) {
    console.error('Financial search controller error:', error);
    
    // Return error response
    return res.status(500).json({
      error: error.message || 'Unable to process request',
      answer: 'I apologize, but I\'m having trouble processing your request right now. Please try again or contact our financial advisors for assistance.'
    });
  }
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Financial AI Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
  console.log(`Financial AI: http://localhost:${PORT}/api/financial-search`);
  console.log(`Groq API Key: ${process.env.GROQ_API_KEY ? 'Loaded' : 'Not loaded'}`);
  console.log(`Using FREE model: llama-3.1-8b-instant`);
});
