
import {Logo,PrimaryButton} from "./../UI/UiComponent";


export default function Footer() {
  return (
    <footer className=" shadow-inner mt-32 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left: Logo + About */}        
          <div>
            <Logo />
            <p className="mt-4 text-gray-600 text-sm">
              Doree Foundation is committed to empowering communities and creating sustainable impact.
            </p>
          </div>

          {/* Center: Navigation */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-orange-500 font-semibold mb-2">Our Work</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li><a href="/work/project1" className=" hover:text-orange-500">Project One</a></li>
                <li><a href="/work/project2" className="hover:text-orange-500">Project Two</a></li>
                <li><a href="/work/project3" className="hover:text-orange-500">Project Three</a></li>
                <li><a href="/work/project4" className="hover:text-orange-500">Project Four</a></li>
                <li><a href="/work/project5" className="hover:text-orange-500">Project Five</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-orange-500 font-semibold mb-2 ">What We Do</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li><a href="/do/service1" className="hover:text-orange-500">Service One</a></li>
                <li><a href="/do/service2" className="hover:text-orange-500">Service Two</a></li>
                <li><a href="/do/service3" className="hover:text-orange-500">Service Three</a></li>
                <li><a href="/do/service4" className="hover:text-orange-500">Service Four</a></li>
                <li><a href="/do/service5" className="hover:text-orange-500">Service Five</a></li>
              </ul>
            </div>
          </div>

          {/* Right: Contact + CTA */}
          <div>
            <h3 className="text-orange-500 font-semibold mb-2">Get In Touch</h3>
            <p className="text-sm text-gray-600 mb-4">
              Have questions or want to collaborate? Reach out to us anytime.
            </p>
            <PrimaryButton href="/contact">Contact Us</PrimaryButton>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Doree Foundation. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="/privacy" className="hover:text-orange-500">Privacy Policy</a>
            <a href="/terms" className="hover:text-orange-500">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}