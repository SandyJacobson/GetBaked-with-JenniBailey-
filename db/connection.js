const path = require('path')
require('dotenv').config({
  path: path.resolve('../.env')
})

const postgres = require('postgres')
// const db = postgres(`postgres://${process.env.DB_USER}:${process.env.DB_PW}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB}`)
const db = postgres({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB,
  username: process.env.DB_USER,
  pass: process.env.DB_PW
})

// const db = postgres({ ...options })


const test = async () => {
  let results
  try {
    results = await db`
      select * from products
    `
  } catch (e){
    console.log(e)
  } finally {
    db.end()
  }  
  
  console.log(results)
}

test()
module.exports = {
  db
}