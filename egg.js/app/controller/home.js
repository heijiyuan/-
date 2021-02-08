'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    var a =await this.service.egg.index();
      // var b = '123'
      this.ctx.body= {
        a:a,
        // b:b
      }
      // return {
      //   a:a,
      //   b:b

      // }
  //  await this.ctx.render('heihei',
  //  {
  //    a:a,
  //     b:b,
  // });
  }
}

module.exports = HomeController;
