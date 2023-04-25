import type {Rule} from 'sanity'

const allowedOperations = ['*', '+', '-', '/']
const stage = {
  name: 'stage',
  type: 'document',
  title: 'Etap',
  fields: [
    {name: 'title', type: 'string', title: 'tytuł', validation: (rule: Rule) => rule.required()},
    {
      name: 'bgColor',
      type: 'color',
      title: 'kolor tła',
    },
    {
      name: 'priceMod',
      type: 'string',
      title: 'Modyfikator ceny',
      options: {
        list: allowedOperations.map((operation) => ({title: operation, value: operation})),
        layout: "radio",
      },
      validation: (rule: Rule) =>
        rule.required().custom((value: string) => {
          if (!value) return true
          return allowedOperations.includes(value)
            ? true
            : `Wartość musi być jedną z wymienionych: ${allowedOperations.join()}`
        }),
    },
    {
      name: 'options',
      type: 'array',
      title: 'Dostępne opcje',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'tytuł', validation: (rule:Rule)=>rule.required()},
            {name: 'value', type: 'number', title: 'wartość', validation: (rule:Rule)=>rule.required()},
            {name: 'textColor', type: 'color', title: 'kolor tytułu'},
            {name: 'background', type: 'image', title: 'tło'},
          ],
        },
      ],
    },
  ],
}

export default stage
