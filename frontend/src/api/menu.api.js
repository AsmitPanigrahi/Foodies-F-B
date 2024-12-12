import api from './api.config';

export const menuAPI = {
  // Get all menu items for a restaurant
  getItems: async (restaurantId) => {
    try {
      const endpoint = `/restaurants/${restaurantId}/menu`;
      console.log('Menu API: Getting items at endpoint:', endpoint);
      const response = await api.get(endpoint);
      console.log('Menu API: Raw response:', response);
      
      if (response.data) {
        console.log('Menu API: Processed response:', response.data);
        return response.data;
      } else {
        console.warn('Menu API: No data in response');
        throw new Error('No data received from server');
      }
    } catch (error) {
      console.error('Menu API: Error getting menu items:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        endpoint: `/restaurants/${restaurantId}/menu`,
        config: error.config
      });
      throw error;
    }
  },

  // Create a new menu item
  createItem: async (restaurantId, menuItemData) => {
    try {
      const endpoint = `/restaurants/${restaurantId}/menu`;
      console.log('Menu API: Creating item at endpoint:', endpoint);
      console.log('Menu API: Sending data:', menuItemData);
      
      const response = await api.post(endpoint, menuItemData);
      console.log('Menu API: Raw response:', response);
      
      if (response.data) {
        console.log('Menu API: Processed response:', response.data);
        return response.data;
      } else {
        console.warn('Menu API: No data in response');
        throw new Error('No data received from server');
      }
    } catch (error) {
      console.error('Menu API: Error creating menu item:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        endpoint: `/restaurants/${restaurantId}/menu`,
        config: error.config
      });
      throw error;
    }
  },

  // Update a menu item
  updateItem: async (restaurantId, itemId, menuItemData) => {
    try {
      const endpoint = `/restaurants/${restaurantId}/menu/${itemId}`;
      console.log('Menu API: Updating item at endpoint:', endpoint);
      console.log('Menu API: Sending data:', menuItemData);
      
      const response = await api.put(endpoint, menuItemData);
      console.log('Menu API: Raw response:', response);
      
      if (response.data) {
        console.log('Menu API: Processed response:', response.data);
        return response.data;
      } else {
        console.warn('Menu API: No data in response');
        throw new Error('No data received from server');
      }
    } catch (error) {
      console.error('Menu API: Error updating menu item:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        endpoint: `/restaurants/${restaurantId}/menu/${itemId}`,
        config: error.config
      });
      throw error;
    }
  },

  // Delete a menu item
  deleteItem: async (restaurantId, itemId) => {
    try {
      const endpoint = `/restaurants/${restaurantId}/menu/${itemId}`;
      console.log('Menu API: Deleting item at endpoint:', endpoint);
      
      const response = await api.delete(endpoint);
      console.log('Menu API: Raw response:', response);
      
      if (response.data) {
        console.log('Menu API: Processed response:', response.data);
        return response.data;
      } else {
        console.warn('Menu API: No data in response');
        throw new Error('No data received from server');
      }
    } catch (error) {
      console.error('Menu API: Error deleting menu item:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        endpoint: `/restaurants/${restaurantId}/menu/${itemId}`,
        config: error.config
      });
      throw error;
    }
  }
};

export default menuAPI;
