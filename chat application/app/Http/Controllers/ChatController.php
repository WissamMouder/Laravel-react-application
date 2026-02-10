namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function chat(Request $request)
    {
        $request->validate([
            'message' => 'required|string',
        ]);

        $userMessage = escapeshellarg($request->message);

        // Use double quotes and escaped backslashes
        $scriptPath = "C:\\Users\\HP\\generate.py";
        $command = "python \"$scriptPath\" $userMessage";

        $output = shell_exec($command);
        $response = json_decode($output, true);

        return response()->json($response);
    }
}