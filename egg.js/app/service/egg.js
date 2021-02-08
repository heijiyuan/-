const Service  = require('egg').Service;

class EggService extends Service {
  async index() {
    //  var a = '1230';
     const { ctx, app } = this;
     const a = await this.app.mysql.select('jia');
     console.log(a);
    //  ctx.body = 'hi, egg';
   return a;
  }

  async addlist(id,name,time){
    // console.log(name,"111")
     await this.app.mysql.insert("jia",{
       id:id,
       name:name,
       time:time,
       
   })
   return  await this.app.mysql.select('jia');
   
}
   async getdel(id){
  // console.log(name,"111")
   await this.app.mysql.delete("jia",{
     id:id,
 })
 return  await this.app.mysql.select('jia');
 
}

}

module.exports = EggService;