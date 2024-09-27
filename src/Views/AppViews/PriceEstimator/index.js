import { APP_PREFIX_PATH } from "Configs/AppConfig";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class PriceEstimator extends Component {
  render() {
    const services = [
      {
        title: "AMAZON EC2",
        route: `${APP_PREFIX_PATH}/assets/price-estimator/configure-setup`,
        description:
          "We provide a wide selection of instance types optimized to fit different use cases. Instance types comprise varying combinations of CPU, memory, storage, and networking capacity and give you the flexibility to choose the appropriate mix of resources for your applications.",
      },
      {
        title: "AMAZON EBS VOLUME",
        description:
          "We Elastic Block Storage (EBS) allows you to create persistent block storage volumes and attach them to Amazon EC2 instances.",
      },
      {
        title: "AMAZON RDS DB INSTANCE",
        description:
          "Amazon RDS makes it easy to set up, operate, and scale PostgreSQL deployments in the cloud. With Amazon RDS, you can deploy scalable PostgreSQL deployments in minutes with cost-efficient and resizable hardware capacity.",
      },
      {
        title: "AMAZON LAMBDA",
        description:
          "AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume – there is no charge when your code is not running.",
      },
      {
        title: "AMAZON AUTO SCALING GROUP",
        description:
          "AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume – there is no charge when your code is not running.",
      },
    ];

    return (
      <div className="p-6">
        <h2 className="text-3xl font-semibold mb-8 text-center">Price Estimator</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              {/* Only include the Link if the route is defined */}
              {service.route ? (
                <Link to={service.route}>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                    Optimize
                  </button>
                </Link>
              ) : (
                <button
                  className="bg-gray-300 text-white py-2 px-4 rounded cursor-not-allowed"
                  disabled
                >
                  Optimize
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PriceEstimator;
