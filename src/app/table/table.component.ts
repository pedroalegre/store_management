import { Component, OnInit } from '@angular/core';
import productsData from '../../assets/sample.json';

interface Product {
    name: string,
    sku: string,
    barcode: string,
    enabled: boolean
}

@Component({
    selector: 'table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    constructor() {

    }
    ngOnInit() {
        console.log('INIT TABLE')
    }
    displayedColumns: string[] = ['name', 'sku', 'barcode', 'enabled'];
    dataSource: Product[] = productsData.products;
}