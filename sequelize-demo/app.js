#!/usr/bin/env node --debug-brk

const Sequelize = require('sequelize');
const config =  require('./config');

let sequelize = new Sequelize(config.database,config.username,config.password,{
  host:config.host,
  dialect:'mysql',
  pool:{
    max:5,
    min:0,
    idle:30000
  }
});

// 默认值呢？
// 创造Model，它和表是什么关系，仍然待定。
let Pet = sequelize.define('pet',{ // 传入pet默认为pets
  id:{
    type:Sequelize.STRING(50),
    primaryKey:true  // 标明主键
  },
  name:Sequelize.STRING(100),  // 列名和数据类型
  gender:Sequelize.BOOLEAN,
  birth:Sequelize.STRING(10),
  createdAt:Sequelize.BIGINT,
  updatedAt:Sequelize.BIGINT,
  version:Sequelize.BIGINT
},{
  timestamps:false   // 关闭自动添加timestamps的功能
});

// Pet.sync({force:true});

let now = Date.now();

// 生成Model实例
let pet = Pet.create({
  id:'g' + now,
  name:'Gaffey',
  gender:false,
  birth:'2007-10-20',
  createdAt:now,
  updatedAt:now,
  version:0
}).then(function(p){
  console.log('createdd' + JSON.stringify(p)+'\n')
}).catch(function(err){
  console.log('failed' + err);
});

// 查找Model实例，存在的话不改
// Pet.findOrCreate({
//   where:{
//     name:'markdown'
//   },
//   defaults:{
//     id:'g' + Date.now(),
//     gender:true,
//     birth:'2012-11-29'
//   }
// }).spread(function(pet, created){
//   console.log(pet.get());
//   console.log('created:'+created);
// });

// 查找一个
Pet.findAll({
  where:{
    // name:'markdown'
    // name:{
    //   $or:['markdown','Gaffey']
    // }
    // $or:{
    //   name:['markdown']
    // }
    createdAt:{gt:1488508136593}
  },
  // limit:30,
  // offset:1
  order:'createdAt',
  attributes:['id','name','birth']
}).then(function(pets){
  for(let p of pets){
    console.log(p.get().name+ " - "+p.get().id);
  }
})

Pet.min('createdAt').then(p=>{
  console.log(p);  // 快速查找最小值
})



