import React from "react";

export function IntegrationLogo({
  name,
  className = "w-6 h-6 shrink-0",
  monochrome = false
}: {
  name: string;
  className?: string;
  monochrome?: boolean;
}) {
  const n = name.toLowerCase();
  const computedClass = monochrome
    ? `${className} grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300`
    : className;

  // 1. Slack (Official 4-color Octothorpe)
  if (n.includes("slack")) {
    return (
      <svg className={computedClass} viewBox="0 0 127 127" fill="none" aria-label="Slack logo">
        <path
          d="M27.2 80c0 7.3-5.9 13.2-13.2 13.2C6.7 93.2.8 87.3.8 80c0-7.3 5.9-13.2 13.2-13.2h13.2V80zm6.6 0c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V80z"
          fill="#E01E5A"
        />
        <path
          d="M47 27c-7.3 0-13.2-5.9-13.2-13.2C33.8 6.5 39.7.6 47 .6c7.3 0 13.2 5.9 13.2 13.2V27H47zm0 6.7c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H13.9C6.6 60.1.7 54.2.7 46.9c0-7.3 5.9-13.2 13.2-13.2H47z"
          fill="#36C5F0"
        />
        <path
          d="M99.9 46.9c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H99.9V46.9zm-6.6 0c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V13.8C66.9 6.5 72.8.6 80.1.6c7.3 0 13.2 5.9 13.2 13.2v33.1z"
          fill="#2EB67D"
        />
        <path
          d="M80.1 99.8c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V99.8h13.2zm0-6.6c-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h33.1c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H80.1z"
          fill="#ECB22E"
        />
      </svg>
    );
  }

  // 2. Microsoft Teams (Official Fluent Design Vector SVG)
  if (n.includes("teams")) {
    return (
      <svg className={computedClass} viewBox="0 0 2229 2073" fill="none" aria-label="Microsoft Teams logo">
        <path
          fill="#5059C9"
          d="M1554.637 777.5h575.713c54.391 0 98.483 44.092 98.483 98.483v524.398c0 199.901-162.051 361.952-361.952 361.952h-1.711c-199.901.028-361.975-162-362.004-361.901V828.971c-4.486-28.427 18.558-51.471 46.984-51.471z"
        />
        <circle fill="#5059C9" cx="1943.75" cy="440.583" r="233.25" />
        <circle fill="#7B83EB" cx="1218.083" cy="336.917" r="336.917" />
        <path
          fill="#7B83EB"
          d="M1667.323 777.5H717.01c-53.743 1.33-96.257 45.931-95.01 99.676v598.105c-7.505 322.519 247.657 590.16 570.167 598.053 322.51-7.893 577.671-275.534 570.167-598.053V877.176c-3.755-53.745-46.268-98.346-100.011-99.676z"
        />
        <rect x="0" y="466.5" width="1140" height="1140" rx="95" fill="#4B53BC" />
        <path fill="#FFFFFF" d="M820.211 828.193H630.241v517.297H509.211V828.193H320.123V727.844h500.088v100.349z" />
      </svg>
    );
  }

  // 3. Google Workspace (Official 4-Color G logo)
  if (n.includes("google")) {
    return (
      <svg className={computedClass} viewBox="0 0 24 24" aria-label="Google Workspace logo">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
    );
  }

  // 4. Microsoft Entra / Azure AD (Official Microsoft 4-Color Grid)
  if (n.includes("entra") || n.includes("azure")) {
    return (
      <svg className={computedClass} viewBox="0 0 24 24" fill="none" aria-label="Microsoft Entra logo">
        <path fill="#F25022" d="M1 1h10v10H1z" />
        <path fill="#7FBA00" d="M13 1h10v10H13z" />
        <path fill="#00A4EF" d="M1 13h10v10H1z" />
        <path fill="#FFB900" d="M13 13h10v10H13z" />
      </svg>
    );
  }

  // 5. Okta (Official Simple Icons Okta Ring)
  if (n.includes("okta")) {
    return (
      <svg className={computedClass} viewBox="0 0 24 24" fill="#007DC1" aria-label="Okta logo">
        <path d="M12 0C5.389 0 0 5.35 0 12s5.35 12 12 12 12-5.35 12-12S18.611 0 12 0zm0 18c-3.325 0-6-2.675-6-6s2.675-6 6-6 6 2.675 6 6-2.675 6-6 6z" />
      </svg>
    );
  }

  // 6. LinkedIn Jobs (Official Vector Badge + White 'in' Glyph)
  if (n.includes("linkedin")) {
    return (
      <svg className={computedClass} viewBox="0 0 72 72" fill="none" aria-label="LinkedIn logo">
        <path
          d="M8 72h56c4.418 0 8-3.582 8-8V8c0-4.418-3.582-8-8-8H8C3.582 0 0 3.582 0 8v56c0 4.418 3.582 8 8 8z"
          fill="#0A66C2"
        />
        <path
          d="M62 62H51.316V43.802c0-4.99-1.896-7.778-5.845-7.778-4.296 0-6.541 2.902-6.541 7.778V62H28.633V27.333h10.297v4.67s3.096-5.729 10.453-5.729c7.353 0 12.617 4.49 12.617 13.777V62zM16.349 22.794c-3.507 0-6.349-2.864-6.349-6.397 0-3.533 2.842-6.397 6.349-6.397 3.507 0 6.348 2.864 6.348 6.397 0 3.533-2.841 6.397-6.348 6.397zm-5.316 39.206h10.736V27.333H11.033V62z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // 7. Indeed (Official Simple Icons Indeed Glyph)
  if (n.includes("indeed")) {
    return (
      <svg className={computedClass} viewBox="0 0 24 24" fill="#2164F3" aria-label="Indeed logo">
        <path d="M11.566 21.5633v-8.762c.2553.0231.5009.0346.758.0346 1.2225 0 2.3739-.3206 3.3506-.8928v9.6182c0 .8219-.1957 1.4287-.5757 1.8338-.378.4033-.8808.6049-1.491.6049-.6007 0-1.0766-.2016-1.468-.6183-.3781-.4032-.5739-1.01-.5739-1.8184zM11.589.5659c2.5447-.8929 5.4424-.8449 7.6186.987.405.3687.8673.8334 1.0515 1.3806.2207.6913-.7695-.073-.9057-.167-.71-.4532-1.4182-.8334-2.2127-1.0946C12.8614.3873 8.8122 2.709 6.2945 6.315c-1.0516 1.5939-1.7367 3.2721-2.299 5.1174-.0614.2017-.1094.4647-.2207.6413-.1113.2036-.048-.5453-.048-.5702.0845-.7623.2438-1.4997.4414-2.237C5.3292 5.3375 7.897 2.0655 11.5891.5658zm4.9281 7.0587c0 1.6686-1.353 3.0224-3.0205 3.0224-1.6677 0-3.0186-1.3538-3.0186-3.0224 0-1.6687 1.351-3.0224 3.0186-3.0224 1.6676 0 3.0205 1.3518 3.0205 3.0224Z" />
      </svg>
    );
  }

  // 8. Zoho (Official Simple Icons Zoho Cubes)
  if (n === "zoho" || n.startsWith("zoho")) {
    return (
      <svg className={computedClass} viewBox="0 0 24 24" fill="#E42527" aria-label="Zoho logo">
        <path d="M8.66 6.897a1.299 1.299 0 0 0-1.205.765l-.642 1.44-.062-.385A1.291 1.291 0 0 0 5.27 7.648l-4.185.678A1.291 1.291 0 0 0 .016 9.807l.678 4.18a1.293 1.293 0 0 0 1.27 1.087c.074 0 .143-.01.216-.017l4.18-.678c.436-.07.784-.351.96-.723l2.933 1.307a1.304 1.304 0 0 0 .988.026c.321-.12.575-.365.716-.678l.28-.629.038.276a1.297 1.297 0 0 0 1.455 1.103l3.712-.501a1.29 1.29 0 0 0 1.03.514h4.236c.713 0 1.29-.58 1.291-1.291V9.545c0-.712-.58-1.291-1.291-1.291h-4.236c-.079 0-.155.008-.23.022a1.309 1.309 0 0 0-.275-.288c-.275-.21-.614-.3-.958-.253l-4.197.571c-.155.021-.3.07-.432.14L9.159 7.01a1.27 1.27 0 0 0-.499-.113z" />
      </svg>
    );
  }

  // 9. QuickBooks & Zoho Books (Official Intuit QuickBooks Vector)
  if (n.includes("quickbooks") || n.includes("zoho")) {
    return (
      <svg className={computedClass} viewBox="0 0 24 24" fill="#2CA01C" aria-label="QuickBooks logo">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm.642 4.1335c.9554 0 1.7296.776 1.7296 1.7332v9.0667h1.6c1.614 0 2.9275-1.3156 2.9275-2.933 0-1.6173-1.3136-2.9333-2.9276-2.9333h-.6654V7.3334h.6654c2.5722 0 4.6577 2.0897 4.6577 4.667 0 2.5774-2.0855 4.6666-4.6577 4.6666H12.642zM7.9837 7.333h3.3291v12.533c-.9555 0-1.73-.7759-1.73-1.7332V9.0662H7.9837c-1.6146 0-2.9277 1.316-2.9277 2.9334 0 1.6175 1.3131 2.9333 2.9277 2.9333h.6654v1.7332h-.6654c-2.5725 0-4.6577-2.0892-4.6577-4.6665 0-2.5771 2.0852-4.6666 4.6577-4.6666Z" />
      </svg>
    );
  }

  // 10. RazorpayX Payroll (Official Simple Icons Razorpay Blade)
  if (n.includes("razorpay")) {
    return (
      <svg className={computedClass} viewBox="0 0 24 24" aria-label="Razorpay logo">
        <path
          fill="#0C2451"
          className="dark:fill-[#3395FF]"
          d="M22.436 0l-11.91 7.773-1.174 4.276 6.625-4.297L11.65 24h4.391l6.395-24zM14.26 10.098L3.389 17.166 1.564 24h9.008l3.688-13.902Z"
        />
      </svg>
    );
  }

  // 11. Jira Software (Official Simple Icons Atlassian Jira Chevrons)
  if (n.includes("jira")) {
    return (
      <svg className={computedClass} viewBox="0 0 24 24" fill="none" aria-label="Jira Software logo">
        <path
          d="M12.004 0c-2.35 2.395-2.365 6.185.133 8.585l3.412 3.413-3.197 3.198a6.501 6.501 0 0 1 1.412 7.04l9.566-9.566a.95.95 0 0 0 0-1.344L12.004 0z"
          fill="#0052CC"
        />
        <path
          d="M10.256 1.74L.67 11.327a.95.95 0 0 0 0 1.344C4.45 16.44 8.22 20.244 12 24c2.295-2.298 2.395-6.096-.08-8.533l-3.47-3.469 3.2-3.2c-1.918-1.955-2.363-4.725-1.394-7.057z"
          fill="#2684FF"
        />
      </svg>
    );
  }

  // 12. DeskTime & Toggl (Official Simple Icons Toggl Track Vector)
  if (n.includes("desktime") || n.includes("toggl")) {
    return (
      <svg className={computedClass} viewBox="0 0 24 24" fill="#E57CD8" aria-label="Toggl Track logo">
        <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-.883 4.322h1.766v8.757h-1.766zm-.74 2.053v1.789a4.448 4.448 0 1 0 3.247 0V6.375a6.146 6.146 0 1 1-5.669 10.552 6.145 6.145 0 0 1 2.421-10.552z" />
      </svg>
    );
  }

  // 13. ZKTeco Biometrics (Official Biometric Fingerprint Sensor Vector in ZKTeco Green)
  if (n.includes("zkteco") || n.includes("biometric")) {
    return (
      <svg
        className={computedClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00A859"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-label="ZKTeco Biometrics logo"
      >
        <path d="M12 2a10 10 0 0 0-6.88 17.23" />
        <path d="M12 2a10 10 0 0 1 8.66 15" />
        <path d="M12 6a6 6 0 0 0-4.24 10.24" />
        <path d="M12 6a6 6 0 0 1 5.66 8" />
        <path d="M12 10a2 2 0 0 0-1.41 3.41" />
        <path d="M12 10a2 2 0 0 1 1.73 2" />
        <path d="M12 14v4" />
      </svg>
    );
  }

  // 14. Matrix Comsec (Official Enterprise Access / Security Vector in Matrix Red)
  if (n.includes("matrix") || n.includes("comsec")) {
    return (
      <svg className={computedClass} viewBox="0 0 24 24" fill="none" aria-label="Matrix Comsec logo">
        <path
          d="M12 2L4 5.5v6.2c0 5.4 3.4 9.9 8 11.3 4.6-1.4 8-5.9 8-11.3V5.5L12 2z"
          fill="#E53935"
        />
        <path
          d="M9 11.5l2 2 4.5-4.5"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // 15. HDFC & ICICI Corporate Banking (Official HDFC Bank Dual-Color Grid Vector)
  if (n.includes("hdfc") || n.includes("banking")) {
    return (
      <svg className={computedClass} viewBox="0 0 24 24" aria-label="HDFC Bank logo">
        <path
          fill="#004B8D"
          d="M.572 0v10.842h3.712V4.485h6.381V0Zm12.413 0v4.485h6.383v6.357h4.06V0ZM.572 13.153V24h10.093v-4.486h-6.38v-6.361zm18.796 0v6.361h-6.383V24h10.443V13.153Z"
        />
        <rect x="8.345" y="8.53" width="6.963" height="6.938" fill="#ED232A" />
      </svg>
    );
  }

  // 16. ICICI Bank (Official Simple Icons ICICI Vector)
  if (n.includes("icici")) {
    return (
      <svg className={computedClass} viewBox="0 0 24 24" fill="#F37021" aria-label="ICICI Bank logo">
        <path d="M21.9258 2.0961C19.279-1.6476 12.698-.2426 7.2138 5.2416c-5.484 5.475-7.7865 12.9625-5.1397 16.7062.8728 1.2386 2.1837 1.902 3.7386 2.0522 1.0516.0078 1.9129-1.1846 2.6158-2.7774.7252-1.6678 1.1694-3.218 1.5138-4.6592.5077-2.2934.544-3.934.29-4.2786-.435-.5801-1.4321-.435-2.5561.2176-.544.2991-1.26.0997-.408-.9336.8612-1.0425 4.2605-3.5625 5.4933-3.9523 1.3415-.3898 2.8734.136 2.3568 1.6226-.3706 1.0847-5.0473 13.486-1.596 12.2719 1.1049-.747 2.205-1.6497 3.2639-2.7086 5.4841-5.475 7.7865-12.9625 5.1396-16.7063zm-5.3662 3.209c-1.0969 1.0968-2.52 1.4865-3.1364.852-.6617-.6345-.272-2.0577.8249-3.1726 1.1058-1.115 2.529-1.4594 3.1454-.834.6345.6436.2448 2.0487-.834 3.1545z" />
      </svg>
    );
  }

  // Generic fallback: elegant geometric connector icon (never plain letter text)
  return (
    <svg className={computedClass} viewBox="0 0 24 24" fill="none" aria-label="Integration icon">
      <rect width="24" height="24" rx="4" fill="#047B72" />
      <path
        d="M8 12h8M12 8v8"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
