export const color = [
    "White",
    "Black",
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Pink",
    "Purple",
    "Orange",
    "Brown",
    "Gray",
];

export const filters = [
    {
        id: "color",
        name: "Color",
        options: [
            { value: "white", label: "White" },
            { value: "beige", label: "Beige" },
            { value: "blue", label: "Blue" },
            { value: "brown", label: "Brown" },
            { value: "green", label: "Green" },
            { value: "purple", label: "Purple" },
            { value: "yellow", label: "Yellow" },
            { value: "pink", label: "Pink" },
            { value: "orange", label: "Orange" },
            { value: "red", label: "Red" },
            { value: "black", label: "Black" },
            { value: "gray", label: "Gray" },
        ],
    },
    {
        id: "size",
        name: "Size",
        options: [
            { value: "xs", label: "XS" },
            { value: "s", label: "S" },
            { value: "m", label: "M" },
            { value: "l", label: "L" },
            { value: "xl", label: "XL" },
        ],
    },
    {
        id: "price",
        name: "Price",
        options: [
            { value: "159-399", label: "₹159 To ₹399" },
            { value: "₹399 - ₹999", label: "₹399 To ₹999" },
            { value: "₹999 - ₹1999", label: "₹999 To ₹1999" },
            { value: "₹1999 - ₹2999", label: "₹1999 To ₹2999" },
            { value: "₹3999 - ₹4999", label: "₹3999 To ₹4999" },
        ],
    },
    {
        id: "discount",
        name: "Discount Range",
        options: [
            { value: "10", label: "10% or more" },
            { value: "20", label: "20% or more" },
            { value: "30", label: "30% or more" },
            { value: "40", label: "40% or more" },
            { value: "50", label: "50% or more" },
            { value: "60", label: "60% or more" },
            { value: "70", label: "70% or more" },
            { value: "80", label: "80% or more" },
        ],
    },
    {
        id: "stock",
        name: "Availability",
        options: [
            { value: "in_stock", label: "In Stock" },
            { value: "out_of_stock", label: "Out of Stock" },
        ]
    },
];
        


export const sortOptions = [
    { name: 'Price: Low to High', query: "price_low", current: false },
    { name: 'Price: High to Low', query: "price_high", current: false },
];