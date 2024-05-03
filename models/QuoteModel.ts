import { connectorMongoDB } 
    from "../config/conectors.ts";  

import { Quote } 
from "../interfaces/Quote.ts";    


export const QuoteModel = connectorMongoDB.collection<Quote>("quote");