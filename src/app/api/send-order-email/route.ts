// src/app/api/send-order-email/route.ts
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// 1. Define your payload types:
interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface Customer {
  name: string;
  email: string;
  address: string;
}

interface OrderData {
  customer: Customer;
  items: OrderItem[];
  total: number;
}

export async function POST(request: NextRequest) {
  // 2. Tell TS that `orderData` has the shape of OrderData
  const orderData: OrderData = await request.json();

  try {
    const msg = {
      to: 'your-company-email@example.com',
      from: 'orders@yourdomain.com',
      subject: `New Order from ${orderData.customer.name}`,
      text: `
New Order Received:

Customer Information:
Name: ${orderData.customer.name}
Email: ${orderData.customer.email}
Address: ${orderData.customer.address}

Order Items:
${orderData.items
  .map(
    item => `
  ${item.name} –
  Quantity: ${item.quantity} –
  Price: $${item.price.toFixed(2)}
`
  )
  .join('\n')}

Total: $${orderData.total.toFixed(2)}
      `,
      html: `
<h1>New Order Received</h1>
<h2>Customer Information</h2>
<p>Name: ${orderData.customer.name}</p>
<p>Email: ${orderData.customer.email}</p>
<p>Address: ${orderData.customer.address}</p>

<h2>Order Items</h2>
<ul>
  ${orderData.items
    .map(
      item => `
    <li>
      ${item.name} –
      Quantity: ${item.quantity} –
      Price: $${item.price.toFixed(2)}
    </li>
  `
    )
    .join('')}
</ul>

<h3>Total: $${orderData.total.toFixed(2)}</h3>
      `,
    };

    await sgMail.send(msg);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send order email' },
      { status: 500 }
    );
  }
}
