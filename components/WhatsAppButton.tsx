const phoneNumber = '919786667567';
const defaultMessage = encodeURIComponent(
  "Hi! I'm interested in your electronics repair services."
);

const chatLink = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

export default function WhatsAppButton() {
  return (
    <a
      href={chatLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Lap Pro Tech on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center gap-0 rounded-full bg-gradient-to-r from-green-500 to-green-400 text-white shadow-lg transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 h-14 w-14 md:h-auto md:w-auto md:px-5 md:py-3 md:gap-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-7 w-7 fill-current md:h-6 md:w-6"
        role="img"
        aria-hidden="true"
      >
        <path d="M16.027 3C9.382 3 4 8.383 4 15.027c0 2.66.879 5.13 2.367 7.147L4 29l7.012-2.328A12.004 12.004 0 0 0 16.027 27C22.672 27 28 21.617 28 14.973 28 8.328 22.672 3 16.027 3Zm0 21.635a9.503 9.503 0 0 1-4.836-1.318l-.348-.207-4.17 1.386 1.375-4.07-.227-.418a9.498 9.498 0 0 1-1.415-4.955c0-5.245 4.272-9.517 9.598-9.517 5.326 0 9.598 4.272 9.598 9.517s-4.272 9.582-9.575 9.582Zm5.487-6.975c-.3-.15-1.774-.867-2.05-.966-.275-.1-.475-.15-.675.15-.2.3-.775.966-.95 1.166-.175.2-.35.225-.65.075-.3-.15-1.262-.465-2.403-1.485-.888-.792-1.487-1.77-1.662-2.07-.175-.3-.018-.462.132-.612.136-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.626-.925-2.225-.244-.588-.494-.51-.675-.52-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.875 1.225 3.075c.15.2 2.112 3.225 5.112 4.52.715.309 1.272.494 1.706.631.717.228 1.37.196 1.885.119.575-.086 1.774-.725 2.025-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35Z" />
      </svg>
      <span className="hidden font-semibold md:inline">WhatsApp</span>
    </a>
  );
}

