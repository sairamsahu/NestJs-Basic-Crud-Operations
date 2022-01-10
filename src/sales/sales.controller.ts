import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SalesDTO } from './sales.dto';
import { SalesService } from './sales.service';

@Controller('sales')
export class SalesController {


    constructor(private salesService:SalesService){
    }


    @Post()
    saveSales(@Body()salesDto:SalesDTO){
       return this.salesService.saveSales(salesDto)
    }

    @Get()
    getSales(){
        return this.salesService.getSales();
    }

    @Get(":salesCode")
    getSalesById(@Param('salesCode') salesCode:string){
          return this.salesService.getSalesById(salesCode);
    }

    @Get(":salesCode/:salesName")
    getSalesByParam(@Param('salesCode') salesCode:string, @Param('salesName') salesName:string){
          return this.salesService.getSalesByParam(salesCode,salesName)
    }

    @Put(":salesCode")
    updatesales(@Param('salesCode') salesCode:string, @Body()salesDto:SalesDTO){
         return this.salesService.updateSales(salesCode,salesDto)
    }

    @Delete(":salesCode")
    deleteSales(@Param('salesCode') salesCode:string):void{
        return this.salesService.deleteSales(salesCode);
    }

    


}
