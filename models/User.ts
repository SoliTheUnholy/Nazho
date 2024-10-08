import mongoose, { Schema, model } from "mongoose";

export interface userDocument {
  _id: string;
  name: string;
  number: string;
  password: string;
  code: string;
  address: string;
  zipCode: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<userDocument>(
  {
    number: {
      type: String,
      unique: true,
      required: [true, "Number is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  {
    timestamps: true,
  },
);

const user = mongoose.models?.user || model<userDocument>("user", userSchema);
export default user;
