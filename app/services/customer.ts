import Service from '@ember/service';
import { Customer, CustomersResponse } from 'customerio-app/common/customer';
import fetch from 'fetch';
import ENV from '../config/environment';

type Method = 'GET' | 'POST' | 'DELETE' | 'PATCH';

interface ApiRequestConfig {
  method?: Method;
  body?: any;
  headers?: HeadersInit;
}

export default class CustomerService extends Service {
  apiRequest<TResponse>(
    url: string,
    config: ApiRequestConfig = {}
  ): Promise<TResponse> {
    console.log(ENV);
    const apiUrl = ENV.apiUrl;
    const requestUrl = apiUrl + url;

    config.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    return fetch(requestUrl, config)
      .then((response) => response.json())
      .then((data) => data);
  }

  async getCustomers(): Promise<CustomersResponse> {
    const response = await this.apiRequest<CustomersResponse>('customers', {
      method: 'GET',
    });

    return response;
  }

  async getCustomer(id: number): Promise<Customer> {
    const response = await this.apiRequest<{
      customer: Customer;
    }>(`customers/${id}`, {
      method: 'GET',
    });

    return response.customer;
  }

  async updateCustomer(id: number, body: any): Promise<Customer> {
    const response = await this.apiRequest<{
      customer: Customer;
    }>(`customers/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(body),
    });

    return response.customer;
  }
}
