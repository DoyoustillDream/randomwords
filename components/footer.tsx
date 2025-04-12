export default function Footer() {
  return (
    <footer className="border-t border-[#3a5c58] bg-[#1a2c38] py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Wild Token. All rights reserved. This is a fictional token website for
            demonstration purposes only.
          </p>
        </div>
      </div>
    </footer>
  )
}
