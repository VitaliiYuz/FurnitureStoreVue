import api from './axiosInstance';

class ProductDAO{
    async getAllProducts()
    {
        console.log('Get products by id : ');
        try 
        {
            await new Promise(resolve => setTimeout(resolve, 2000));
            const response = await api.get('/Products/');
            return response.data;
        }catch(error)
        {
            console.error('Error fetching players: ', error.toString());
        }
        return [];
    }

}

export default new ProductDAO();