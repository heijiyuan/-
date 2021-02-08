'use strict';

const Controller = require('egg').Controller;

class AddController extends Controller {
    async addlist(){
        const {ctx,service}=this;
        let id=ctx.request.body.id;
        let name=ctx.request.body.name;       
        let time=ctx.request.body.time;       
      
        let result=await service.egg.addlist(id,name,time)
        ctx.body=result;
         console.log(result,'添加成功');
      }    

      async getdel(){
        const {ctx,service}=this;
        let id=ctx.request.body.id;
        // let name=ctx.request.body.name;       
        // let time=ctx.request.body.time;            
        let result=await service.egg.getdel(id)
        ctx.body=result;
         console.log(result,'删除成功');
      }    
}

module.exports = AddController;
