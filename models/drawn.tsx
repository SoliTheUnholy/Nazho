import mongoose, { Schema, model } from "mongoose";

export interface drawnDocument {
  _id: string;
  diameter: 4 | 4.2 | 4.4 | 4.6 | 4.7 | 5 | 5.5 | 6 | 8 | 10 | 12;
  ribbed: boolean;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

const drawnSchema = new Schema<drawnDocument>(
  {},
  {
    timestamps: true,
  },
);

const drawn =
  mongoose.models?.drawn || model<drawnDocument>("drawn", drawnSchema);
export default drawn;
