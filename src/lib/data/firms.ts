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
    price: number;          // For sorting
    priceDisplay: string;   // For display
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
    }
    // Add more firms as needed
];
    