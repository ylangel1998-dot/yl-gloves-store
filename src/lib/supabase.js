import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://coyyldqmimzflbcevppj.supabase.co'
const supabaseKey = 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Database tables will be configured in Supabase dashboard
// Tables needed:
// - products (id, name, description, price, images, category, stock, created_at)
// - profiles (id, email, full_name, avatar_url, is_vip, vip_expires_at, created_at)
// - orders (id, user_id, total, status, shipping_address, created_at)
// - order_items (id, order_id, product_id, quantity, price)
// - reviews (id, product_id, user_id, rating, comment, created_at)
// - subscriptions (id, user_id, plan, status, start_date, end_date, created_at)
// - cart_items (id, user_id, product_id, quantity, created_at)
