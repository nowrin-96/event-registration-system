export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const { name, email, department, year } = body;

    // Validation
    if (!name || !email || !department || !year) {
      return new Response(
        JSON.stringify({ success: false, message: "All fields are required." }),
        { headers: { "Content-Type": "application/json" }, status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid email format." }),
        { headers: { "Content-Type": "application/json" }, status: 400 }
      );
    }

    // Success response
    return new Response(
      JSON.stringify({
        success: true,
        message: `Registration successful for ${name} (${year}, ${department}).`
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, message: "Server error. Please try again later." }),
      { headers: { "Content-Type": "application/json" }, status: 500 }
    );
  }
}
