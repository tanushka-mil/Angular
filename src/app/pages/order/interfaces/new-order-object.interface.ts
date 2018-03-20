export interface LeadsDeliver {
    type: string;
    value: string;
}


export interface Geo {
    latitude: number;
    longitude: number;
    radius: number;
}


export interface DailyLeads {
    Sunday: LeadsSettings;
    Monday: LeadsSettings;
    Tuesday: LeadsSettings;
    Wednesday: LeadsSettings;
    Thursday: LeadsSettings;
    Friday: LeadsSettings;
    Saturday: LeadsSettings;
}


export interface LeadsSettings {
    isActive: boolean;
    leadsPerDay: number;
    timeFrom: number;
    timeTo: number;
}


export interface Order {
    insuranceType?: string;
    productType?: string;
    selectTemplate?: string;
    leadsDeliver?: LeadsDeliver;
    geo?: Geo;
    leadsTime?: DailyLeads;
}
