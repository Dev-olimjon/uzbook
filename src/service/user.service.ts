import User from "../model/user.model";
import client from "../db/client";
import login from "../model/login.model";
async function addUser(user:User){

   let sql = 'INSERT INTO users(name, surname, number, email, password) VALUES ($1,$2,$3,$4,$5)'
   await client.query(sql,[user.name,user.surname,user.number,user.email,user.password])
}

async function register(email: string): Promise<User|null> {
   let sql = 'SELECT * FROM users WHERE email = $1'
   let res = await client.query(sql, [email])
   if (res.rows.length === 0) {
      return null
   }
   return res.rows[0] as User
}

export type Item = {
   id: string,
   name: string,
   cost: number
}

export type Cart = {
   total: number,
   items: Item[]
}
let carts = new Map<string, Cart>()

export function findUser(username: string) : Cart {
   if (carts.has(username)) {
      return carts.get(username)!
   }
   else {
      let cart: Cart = {
         total: 0,
         items: []
      }
      carts.set(username, cart)
      return cart
   }
}

export default {
   addUser,
   register,
   findUser
}