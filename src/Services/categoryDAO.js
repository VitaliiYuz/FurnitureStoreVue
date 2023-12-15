import api from './axiosInstance';

class CategoryDAO{
    async getCategoryById(productId)
    {
        console.log('Get category by id : ' + productId);
        try 
        {
            await new Promise(resolve => setTimeout(resolve, 2000));
            const response = await api.get('/Category/'+productId);
            return response.data;
        }catch(error)
        {
            console.error('Error fetching category: ', error.toString());
        }
        return [];
    }
}

export default new CategoryDAO();