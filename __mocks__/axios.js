export default {
   post: jest.fn().mockResolvedValue({ data: {} }),
   get: jest.fn().mockResolvedValue({
      data: [
         {
            description: '',
            homepageUrl: '',
            name: '',
            openGraphImageUrl: '',
            url: '',
            _id: 's',
         },
      ],
   }),
};
