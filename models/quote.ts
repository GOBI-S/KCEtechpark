import mongoose, { Schema, Document, models } from "mongoose"

export interface IQuoteRequest extends Document {
  name: string
  mobile: string
  email:string
  workspace?: string
  createdAt: Date
}

const QuoteRequestSchema = new Schema<IQuoteRequest>({
  name: { type: String, required: true },
  email:{type:String,required:true},
  mobile: { type: String, required: true },
  workspace: { type: String },
  createdAt: { type: Date, default: Date.now },
})

// Avoid recompiling model on hot-reload
const QuoteRequest =
  models.QuoteRequest || mongoose.model<IQuoteRequest>("QuoteRequest", QuoteRequestSchema)

export default QuoteRequest
