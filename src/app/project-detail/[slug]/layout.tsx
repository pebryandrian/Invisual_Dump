export default function ProjectDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full px-6 md:px-20 pt-6 pb-12">
      {/* Sidebar sudah hilang */}
      {children}
    </div>
  );
}
