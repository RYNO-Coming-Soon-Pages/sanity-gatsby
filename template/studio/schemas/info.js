export default {
    name: 'info',
    title: 'Info',
    type: 'document',
    fields: [
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            fields: [
                {
                  name: 'caption',
                  type: 'string',
                  title: 'Caption',
                  options: {
                    isHighlighted: true // <-- make this field easily accessible
                  }
                },
                {
                  // Editing this field will be hidden behind an "Edit"-button
                  name: 'attribution',
                  type: 'string',
                  title: 'Attribution',
                }
              ]
        },
        {
            name: 'heading',
            title: 'Heading',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Company Name',
            type: 'string'
        },
        {
            name: 'phone',
            title: 'Phone',
            type: 'string'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            name: 'highlightColor',
            title: 'Highlight Color',
            type: 'color'
          }
    ]
}