import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document;

@Schema()
export class Users {
  @Prop()
  id: string;
  
  @Prop()
  firstname: string;

  @Prop()
  lastname: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
