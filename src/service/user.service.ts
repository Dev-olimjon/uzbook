import User from "../model/user.model";
import client from "../db/client";
import login from "../model/login.model";
import Userdate from "../model/userdate.model";
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
   return mapUser(res.rows[0])
}

function mapUser(row:any){
   return row as User
}

async function userdate(email:string){
   let sql = 'SELECT * from users WHERE email = $1'
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


//----------------------------------------------------------------------

function changeUser(id:number,user:User){
let sql = 'UPDATE TABLE users SET name=$1, surname=$2, number=$3,email=$4,password=$5  WHERE id=$6'
}

export default {
   addUser,
   register,
   userdate
}