import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '',
    dataset:'production',
    apiVersion:'2022-11-11',
    useCdn: true,
    token:'',
});

const builder = imageUrlBuilder(client);