import { VkUser } from './vk-user.interface';

export interface VkFrends {
  count: number;
  items: Array<VkUser>;
}
