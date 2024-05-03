import QuoteRepository from "../repositories/QuoteRepository.ts";
import { Quote } from "../interfaces/Quote.ts";

class QuoteService {

    getQuotes  =  async(page: number, size: number) => {
        return await QuoteRepository.getQuotes(page, size);
    };

      
    getQuoteByoid = async (oid: string) =>{
       return await QuoteRepository.getQuoteByoid(oid);
    }
    
    getQuote = async (id: number) => {
        return await QuoteRepository.getQuote(id);
    }
    
    createQuote = async (quote: Quote) => {
        return await QuoteRepository.addQuote(quote);
            
    };

    updateQuote = async (id: number, quote: Quote, ) => {
        return  await QuoteRepository.updateQuote(id,quote);
    };

    deleteQuote = async (id: number) => {
        return await QuoteRepository.deleteQuote(id);
    };
}

export default new QuoteService();
