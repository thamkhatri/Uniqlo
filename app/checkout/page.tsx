import { redirect } from "next/navigation";
import { createSupabaseServer } from "@/lib/supabase/server";

export default async function CheckoutPage() {
    const supabase = await createSupabaseServer();
    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
        redirect("/login");
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Checkout</h1>
            {/* checkout UI here */}
        </div>
    );
}
