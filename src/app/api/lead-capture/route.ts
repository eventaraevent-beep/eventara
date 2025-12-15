import { NextRequest, NextResponse } from 'next/server';

// Magnet download links mapping
const MAGNET_DOWNLOADS = {
  'wedding-checklist': '/magnets/wedding-checklist.html',
  'budget-guide': '/magnets/budget-guide.html',
  'cost-calculator': '/magnets/cost-calculator.html',
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, phone, eventType, magnetType, timestamp } = body;

    // Validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    if (!phone || phone.replace(/\D/g, '').length < 10) {
      return NextResponse.json(
        { error: 'Valid phone number is required' },
        { status: 400 }
      );
    }

    // Get download link for the magnet type
    const downloadLink = MAGNET_DOWNLOADS[magnetType as keyof typeof MAGNET_DOWNLOADS] || null;

    // TODO: Integrate with email service (SendGrid, Mailgun, etc.)
    // Send email with download link included
    console.log('Lead captured:', {
      email,
      name,
      phone,
      eventType,
      magnetType,
      downloadLink,
      timestamp,
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
    });

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json(
      {
        success: true,
        message: 'Lead captured successfully',
        downloadLink,
        data: { email, name, phone, magnetType },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Lead capture error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
