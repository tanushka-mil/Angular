import {Injectable} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {getNeighborProperty} from '../../../../common/useful-functions';
import {Order} from '../../interfaces/new-order-object.interface';


@Injectable()
export class NewOrderService {

    currentPageNum: string;
    disabledButton: boolean;
    newOrder: Order = {};

    // TODO this will be redone when we will have backend and understanding task more clearly
    pageList = {
        '1': {title: 'Select insurance type', page: 'insurance-type-step'},
        '2': {title: 'Select product type', page: 'product-type-step'},
        '3': {title: 'Select template', page: 'select-template'},
        '4': {title: 'How would you like your leads delivered?', page: 'leads-deliver'},
        '5': {title: 'GEO', page: 'geo'},
        '6': {title: 'When would you like your leads?', page: 'leads-counter-step'}
    };


    constructor(public router: Router,
                public activatedRoute: ActivatedRoute) {
        const currentPageUrl = this.router.url.split('/').pop();
        this.currentPageNum = this.getCurrentPageNumber(currentPageUrl);
    }


    setDisabledButton(key) {
        this.disabledButton = !!key;
    }


    getCurrentPageNumber(page: string): string {
        for (const key in this.pageList) {
            if (this.pageList[key].page === page) {
                return key;
            }
        }
    }


    goNext() {
        const next = getNeighborProperty(this.pageList, this.currentPageNum, 'next');
        if (next) {
            this.goTo(this.pageList[next].page);
        } else {
            this.router.navigate(['../dashboard']);
            this.newOrder = {};
            this.currentPageNum = Object.keys(this.pageList)[0];
        }
    }


    goBack() {
        const back = getNeighborProperty(this.pageList, this.currentPageNum, 'prev');
        if (back) {
            this.goTo(this.pageList[back].page);
        }
    }


    goTo(page: string) {
        this.currentPageNum = this.getCurrentPageNumber(page);
        this.router.navigate([page], {relativeTo: this.activatedRoute});
    }
}

