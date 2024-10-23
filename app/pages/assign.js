import AssignAssetForm from '../components/AssignAssetForm';

export default function AssignPage() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 mt-20">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Create a New Asset</h1>
            <div className="w-full max-w-lg">
                <AssignAssetForm />
            </div>
        </div>
    );
}