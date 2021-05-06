import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './Order';

export enum PizzaName {
  'HUNGARIAN' = 'hungarian',
  'GREEK' = 'greek',
  'HAWAII' = 'hawaii',
  'MARGHERITA' = 'margherita',
  'BOLOGNESE' = 'bolognese',
  'MEXICANA' = 'mexicana',
  'DIABLO' = 'diablo',
  'ANGELO' = 'angelo',
}

export enum BurgerName {
  'CLASSIC' = 'classic',
  'CHEESEBURGER' = 'cheeseburger',
  'ZINGER' = 'zinger',
  'VEGA' = 'vega',
}

export enum FoodSize {
  'LARGE' = 'large',
  'NORMAL' = 'normal',
  'SMALL' = 'small',
}

export enum FoodType {
  'PIZZA' = 'pizza',
  'BURGER' = 'burger',
}

@Entity()
export class Food {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @Column()
  preparation_time: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  size: string;

  @ManyToMany(() => Order, (order) => order.foods)
  orders: Order[];
}
