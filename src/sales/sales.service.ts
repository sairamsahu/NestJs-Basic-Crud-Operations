import { Injectable } from '@nestjs/common';
import { SalesDTO } from './sales.dto';

@Injectable()
export class SalesService {
    
    sales:SalesDTO[] =[];
    saveSales(salesDto: SalesDTO) {
       return this.sales.push(salesDto);
    }

    getSales() {
        return this.sales;
    }

    getSalesById(salesCode: string) {
        return this.sales.filter((sale)=>sale.salesCode===salesCode);
    }

    getSalesByParam(salesCode: string, salesName: string) {
        return this.sales.filter((sale)=>sale.salesCode===salesCode && sale.salesName===salesName)
    }

    updateSales(salesCode: string,salesDto: SalesDTO) {
       const update = this.sales.findIndex((salesDto:SalesDTO)=>salesDto.salesCode===salesCode)
       this.sales[update]=salesDto;
    }

    deleteSales(salesCode: string):void {
        const index = this.sales.findIndex((sale)=>sale.salesCode===salesCode)
     // const index = this.sales.findIndex((salesDto: SalesDTO)=>salesDto.ID===ID);
      this.sales.splice(index,1);
    }
}
