export interface Firm {
    id: number;
    name: string;
    ownership: string;
    economicRating: string;
    specialization: string;
    type: string;
    year: string;
    debt: string;
    activity: string;
    price: number;
    priceDisplay: string;
    taxes: string;
    ebtida: string;
    sales: string;
    revenue: string;
    lost: string;
    description: string;
    location: string;
}

export const firms: Firm[] = [
    {
        id: 1,
        name: 'Firma ABC',
        ownership: 'Výhradní vlastnictví',
        economicRating: 'A',
        specialization: 'IT',
        type: 's.r.o.',
        year: '2020',
        debt: 'Nemá žádné dluhy',
        activity: 'ukončila činnost',
        price: 1000000,
        priceDisplay: '1 000 000 Kč',
        taxes: 'Plátce DPH',
        ebtida: '200 000 Kč',
        sales: '1 000 000 Kč',
        revenue: '800 000 Kč',
        lost: '0 Kč',
        description: 'Popis firmy ABC.',
        location: 'Praha, ČR'
    },
    {
        id: 2,
        name: 'Firma XYZ',
        ownership: 'Společné vlastnictví',
        economicRating: 'B',
        specialization: 'Stavebnictví',
        type: 'a.s.',
        year: '2018',
        debt: 'Má dluhy',
        activity: 'aktivní',
        price: 2000000,
        priceDisplay: '2 000 000 Kč',
        taxes: 'Neplátce DPH',
        ebtida: '300 000 Kč',
        sales: '2 500 000 Kč',
        revenue: '2 000 000 Kč',
        lost: '50 000 Kč',
        description: 'Popis firmy XYZ.',
        location: 'Brno, ČR'
    },
    {
        id: 3,
        name: 'Firma DEF',
        ownership: 'Rodinné vlastnictví',
        economicRating: 'A+',
        specialization: 'Zdravotnictví',
        type: 's.r.o.',
        year: '2015',
        debt: 'Nemá žádné dluhy',
        activity: 'aktivní',
        price: 1500000,
        priceDisplay: '1 500 000 Kč',
        taxes: 'Plátce DPH',
        ebtida: '250 000 Kč',
        sales: '1 800 000 Kč',
        revenue: '1 600 000 Kč',
        lost: '10 000 Kč',
        description: 'Popis firmy DEF.',
        location: 'Ostrava, ČR'
    },
    {
        id: 4,
        name: 'Firma GHI',
        ownership: 'Výhradní vlastnictví',
        economicRating: 'D',
        specialization: 'Doprava',
        type: 'a.s.',
        year: '2012',
        debt: 'Má dluhy',
        activity: 'ukončila činnost',
        price: 800000,
        priceDisplay: '800 000 Kč',
        taxes: 'Neplátce DPH',
        ebtida: '100 000 Kč',
        sales: '900 000 Kč',
        revenue: '700 000 Kč',
        lost: '20 000 Kč',
        description: 'Popis firmy GHI.',
        location: 'Plzeň, ČR'
    },
    {
        id: 5,
        name: 'Firma JKL',
        ownership: 'Společné vlastnictví',
        economicRating: 'C',
        specialization: 'Obchod',
        type: 's.r.o.',
        year: '2019',
        debt: 'Nemá žádné dluhy',
        activity: 'aktivní',
        price: 1200000,
        priceDisplay: '1 200 000 Kč',
        taxes: 'Plátce DPH',
        ebtida: '180 000 Kč',
        sales: '1 300 000 Kč',
        revenue: '1 100 000 Kč',
        lost: '5 000 Kč',
        description: 'Popis firmy JKL.',
        location: 'Liberec, ČR'
    },
    {
        id: 6,
        name: 'Firma MNO',
        ownership: 'Rodinné vlastnictví',
        economicRating: 'A',
        specialization: 'Výroba',
        type: 'a.s.',
        year: '2016',
        debt: 'Má dluhy',
        activity: 'aktivní',
        price: 2500000,
        priceDisplay: '2 500 000 Kč',
        taxes: 'Plátce DPH',
        ebtida: '400 000 Kč',
        sales: '3 000 000 Kč',
        revenue: '2 700 000 Kč',
        lost: '30 000 Kč',
        description: 'Popis firmy MNO.',
        location: 'Olomouc, ČR'
    },
    {
        id: 7,
        name: 'Firma PQR',
        ownership: 'Výhradní vlastnictví',
        economicRating: 'B',
        specialization: 'Služby',
        type: 's.r.o.',
        year: '2021',
        debt: 'Nemá žádné dluhy',
        activity: 'aktivní',
        price: 900000,
        priceDisplay: '900 000 Kč',
        taxes: 'Neplátce DPH',
        ebtida: '120 000 Kč',
        sales: '950 000 Kč',
        revenue: '850 000 Kč',
        lost: '2 000 Kč',
        description: 'Popis firmy PQR.',
        location: 'Hradec Králové, ČR'
    },
    {
        id: 8,
        name: 'Firma STU',
        ownership: 'Společné vlastnictví',
        economicRating: 'F',
        specialization: 'Finance',
        type: 'a.s.',
        year: '2017',
        debt: 'Nemá žádné dluhy',
        activity: 'ukončila činnost',
        price: 1800000,
        priceDisplay: '1 800 000 Kč',
        taxes: 'Plátce DPH',
        ebtida: '220 000 Kč',
        sales: '2 100 000 Kč',
        revenue: '1 900 000 Kč',
        lost: '15 000 Kč',
        description: 'Popis firmy STU.',
        location: 'České Budějovice, ČR'
    }
];