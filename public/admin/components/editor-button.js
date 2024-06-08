CMS.registerEditorComponent({
    // Internal id of the component
    id: "button",
    // Visible label
    label: "Button",
    // Fields the user need to fill out when adding an instance of the component
    fields: [
        {
            name: 'label',
            label: 'label',
            widget: 'string'
        },
        {
            name: 'link',
            label: 'link',
            widget: 'string'
        },
        {
            name: 'type',
            label: 'type',
            widget: 'select',
            options: [
                { label: "White", value: 0 },
                { label: "Black", value: 1 },
                { label: "Primary", value: 0 }
            ]
        },
        {
            name: 'download',
            label: 'link',
            widget: 'file',
            media_library: {
                config: {
                    multiple: false,
                    max_file_size: 1024000
                }
            }
        },
    ],
    pattern: /^:dispatch{:data='(.*?)' type='button'}$/ms,
    fromBlock: function(match) {
        const data = JSON.parse(match[1]);
        return {
            label: data.label,
            link: data.link,
            type: data.type,
            download: data.download
        };
    },
    // This is used to serialize the data from the custom widget to the
    // markdown document
    toBlock: function(data) {
        return `:dispatch{:data='${JSON.stringify( data )}' type='button'}`;
    },
})