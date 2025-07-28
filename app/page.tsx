import siteConfig from "../content/site.config";
import services from "../content/services.json";


export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">{siteConfig.siteTitle}</h1>
      <p className="text-lg text-gray-600">{siteConfig.tagline}</p>
      <img src={siteConfig.logoPath} alt="Logo" width={120} />

      <h2 className="text-2xl mt-6 mb-2">Our Services</h2>
      <ul>
        {services.map((service, idx) => (
          <li key={idx} className="mb-1">
            <strong>{service.title}</strong>: {service.description}
          </li>
        ))}
      </ul>
    </main>
  );
}
