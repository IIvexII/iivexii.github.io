import { ImageResponse } from "next/og";
import { myInfo } from "@/constants";

export const runtime = "edge";

export async function GET() {
  try {
    // Get the skills that should appear in the OG image (limiting to 8 for visual appeal)
    const highlightedSkills = myInfo.skills.slice(0, 8);

    const gridBackgroundStyle = {
      backgroundSize: "40px 40px",
      backgroundImage: `
        linear-gradient(to right, rgba(255, 255, 255, 0.1) 2px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 2px, transparent 1px)
      `,
      opacity: 0.3,
    };

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#030712", // Dark background
            padding: "40px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Gradient background effect */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "80%",
              height: "60%",
              transform: "translate(-50%, -50%)",
              background: "radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
              zIndex: "1",
              filter: "blur(40px)",
            }}
          />
          {/* Background Grid */}
          <div
            style={{
              ...gridBackgroundStyle,
              position: "absolute",
              zIndex: 1,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          ></div>

          {/* Content container */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              zIndex: "2",
              width: "100%",
              maxWidth: "900px",
              gap: "24px",
            }}
          >
            {/* Name and title */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <h1
                style={{
                  fontSize: "64px",
                  fontWeight: "bold",
                  background: "linear-gradient(to right, #818cf8, #4f46e5)",
                  backgroundClip: "text",
                  color: "transparent",
                  margin: "0",
                  lineHeight: "1.2",
                }}
              >
                Zafeer Hafeez
              </h1>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "500",
                  color: "white",
                  margin: "0",
                  opacity: "0.9",
                }}
              >
                React Native Developer
              </h2>
            </div>

            {/* Brief description */}
            <p
              style={{
                fontSize: "24px",
                color: "#e5e7eb",
                textAlign: "center",
                maxWidth: "760px",
                lineHeight: "1.4",
              }}
            >
              Building beautiful, performant mobile experiences with React Native and a full-stack toolkit
            </p>

            {/* Skills/tech stack icons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "16px",
                marginTop: "16px",
                maxWidth: "760px",
              }}
            >
              {highlightedSkills.map((skill, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "rgba(255, 255, 255, 0.1)",
                    padding: "12px 16px",
                    borderRadius: "8px",
                  }}
                >
                  {/* We can't use img tags with external URLs in OG Image due to security restrictions */}
                  <span
                    style={{
                      color: "white",
                      fontSize: "18px",
                      fontWeight: "500",
                    }}
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Website URL at bottom */}
          <div
            style={{
              position: "absolute",
              bottom: "32px",
              textAlign: "center",
              color: "#a1a1aa",
              fontSize: "20px",
            }}
          >
            zafeer.pk
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        headers: {
          "content-type": "image/png",
          "cache-control": "public, immutable, no-transform, max-age=31536000",
        },
      }
    );
  } catch (e) {
    if (e instanceof Error) {
      console.log(`${e.message}`);
    } else {
      console.log(`An unknown error occurred`);
    }
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
