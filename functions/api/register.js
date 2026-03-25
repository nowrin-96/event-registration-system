export async function onRequestPost(context) {
  const body = await context.request.json();
  const { name, email, department } = body;

  // Basic validation
  if (!name || !email || !department) {
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
      message: `Registration successful for ${name} from ${department}.`
    }),
    { headers: { "Content-Type": "application/json" } }
  );
}
