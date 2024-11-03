import pharma1 from '../../image/pharma1.png';
import pharma2 from '../../image/pharma2.png';
import pharma3 from '../../image/pharma3.png';
import obed from '../../image/obed.jpeg';
import cynthia from '../../image/cynthia.jpeg';
import silas from  '../../image/silas.jpeg';

export const pharmacies = [
    {
        id: '1',
        image: pharma1,
        title: 'Kigali Pharma',
        address: '24/7 Kigali Nyarugenge Town',
        tel: '+250780058709',
        workingHours: '24/7',
        avairableServises: [
            "Prescription Filling",
            "Medication Refills",
            "Transfer Prescriptions",
            "Medication Synchronization",
            "Controlled Substance Dispensing",
            "Automated Refill Reminders"
        ],
        inventory: {
            updatedAt: '25/4/2024',
            medicines: [
                "Aspirin",
                "Ibuprofen",
                "Acetaminophen",
                "Amoxicillin",
                "Lisinopril",
                "Metformin",
                "Atorvastatin",
                "Omeprazole",
                "Albuterol",
                "Sertraline"
            ]
        },
        studentsReviews: [
            {
                image: obed,
                name: 'Nzayisenga Emmanuel',
                content: '"Exceptional service with friendly staff! Always willing to help and answer my questions."'
            },
            {
                image: silas,
                name: 'Nsengiyumva Clement',
                content: '"Clean, welcoming environment and excellent customer service! They truly care about their patients."'
            },
            {
                image: cynthia,
                name: 'Denise MUHORAKEYE',
                content: '"Great selection of products and knowledgeable pharmacists! I always leave feeling well-informed."'
            }
        ]
    },
    {
        id: '2',
        image: pharma2,
        title: 'Mediasol',
        address: '24/7 Musanze Branch',
        tel: '+250788000001',
        workingHours: '24/7',
        avairableServises: [
            "Prescription Filling",
            "Health Screenings",
            "Medication Therapy Management",
            "Vaccination Services",
            "Diabetes Education",
            "Nutritional Counseling"
        ],
        inventory: {
            updatedAt: '25/4/2024',
            medicines: [
                "Aspirin",
                "Ibuprofen",
                "Acetaminophen",
                "Amoxicillin",
                "Lisinopril",
                "Metformin",
                "Atorvastatin",
                "Omeprazole",
                "Albuterol",
                "Sertraline"
            ]
        },
        studentsReviews: [
            {
                image: obed,
                name: 'Jean Claude',
                content: '"The staff are very helpful and knowledgeable!"'
            },
            {
                image: silas,
                name: 'Marie Claire',
                content: '"I appreciate their quick service and friendly staff."'
            }
        ]
    },
    {
        id: '3',
        image: pharma3,
        title: 'Salus Pharmacy',
        address: '20/Day Kigali Kicukiro Town',
        tel: '+250788000002',
        workingHours: '24/7',
        avairableServises: [
            "Over-the-Counter Products",
            "Medication Reviews",
            "Chronic Disease Management",
            "Compounding Services",
            "Home Health Care Products",
            "Wellness Programs"
        ],
        inventory: {
            updatedAt: '25/4/2024',
            medicines: [
                "Aspirin",
                "Ibuprofen",
                "Acetaminophen",
                "Amoxicillin",
                "Lisinopril",
                "Metformin",
                "Atorvastatin",
                "Omeprazole",
                "Albuterol",
                "Sertraline"
            ]
        },
        studentsReviews: [
            {
                image: obed,
                name: 'Pierre Ngabo',
                content: '"Always well-stocked and organized!"'
            },
            {
                image: silas,
                name: 'Aline Uwase',
                content: '"The pharmacists here really know their stuff!"'
            }
        ]
    },
    {
        id: '4',
        image: pharma1,
        title: 'Optica Pharma',
        address: '24/7 Kigali SilverBack Mall',
        tel: '+250788000003',
        workingHours: '24/7',
        avairableServises: [
            "Eye Care Products",
            "Vision Testing",
            "Contact Lens Fitting",
            "Optical Dispensing",
            "Prescription Glasses",
            "Sunglasses"
        ],
        inventory: {
            updatedAt: '25/4/2024',
            medicines: [
                "Aspirin",
                "Ibuprofen",
                "Acetaminophen",
                "Amoxicillin",
                "Lisinopril",
                "Metformin",
                "Atorvastatin",
                "Omeprazole",
                "Albuterol",
                "Sertraline"
            ]
        },
        studentsReviews: [
            {
                image: obed,
                name: 'Solange Umutoni',
                content: '"Fantastic service with a focus on eye care!"'
            },
            {
                image: silas,
                name: 'John Rukundo',
                content: '"Very professional staff and great selection."'
            }
        ]
    },
    {
        id: '5',
        image: pharma2,
        title: 'Kisimenti Health',
        address: '24/7 It\'s Lit Out There',
        tel: '+250788000004',
        workingHours: '24/7',
        avairableServises: [
            "Health Screenings",
            "Nutritional Counseling",
            "Vaccination Services",
            "Chronic Disease Management",
            "Wellness Programs",
            "Medication Refills"
        ],
        inventory: {
            updatedAt: '25/4/2024',
            medicines: [
                "Aspirin",
                "Ibuprofen",
                "Acetaminophen",
                "Amoxicillin",
                "Lisinopril",
                "Metformin",
                "Atorvastatin",
                "Omeprazole",
                "Albuterol",
                "Sertraline"
            ]
        },
        studentsReviews: [
            {
                image: obed,
                name: 'Chantal Mukamana',
                content: '"A very caring and helpful team!"'
            },
            {
                image: silas,
                name: 'Eric Manzi',
                content: '"Always a pleasant experience!"'
            },
            {
                image: cynthia,
                name: 'Innocent Kayitesi',
                content: '"Quick and efficient service every time!"'
            },
            {
                image: obed,
                name: 'Patricia Umulisa',
                content: '"The staff are always friendly and attentive!"'
            }
        ]
    }
];
