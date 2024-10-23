import AssetForm from '../components/AssetForm';

export default function AssetsPage() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Create a New Asset</h1>
            <div className="w-full max-w-lg">
                <AssetForm />
            </div>
        </div>
    );
}

