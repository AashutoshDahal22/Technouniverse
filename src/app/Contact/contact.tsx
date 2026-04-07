import React from "react";

export default function Contact() {
  return (
    <div>
      <footer className="border-t border-gray-100 px-6 sm:px-12 py-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase mb-1">
              Technouniverse
            </p>
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
                Email
              </p>
              <a
                href="mailto:technouniversenp@gmail.com"
                className="block text-sm hover:underline underline-offset-4 transition duration-200"
              >
                technouniversenp@gmail.com
              </a>
              <a
                href="mailto:aashudahal11@gmail.com"
                className="block text-sm hover:underline underline-offset-4 transition duration-200"
              >
                aashutoshdahal22@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
                Phone
              </p>
              <a
                href="tel:9803133855"
                className="block text-sm hover:underline underline-offset-4 transition duration-200"
              >
                9803133855
              </a>
              <a
                href="tel:9806770437"
                className="block text-sm hover:underline underline-offset-4 transition duration-200"
              >
                9806770437
              </a>
            </div>
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-gray-400 hover:text-black transition duration-200 underline-offset-4 hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-gray-400 hover:text-black transition duration-200 underline-offset-4 hover:underline"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
