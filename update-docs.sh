#!/bin/bash

# Trivitron Digital Website - Documentation Update Script
# This script updates the technical documentation in your existing codebase

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if we're in the right directory
check_project_directory() {
    if [[ ! -f "package.json" ]]; then
        print_error "package.json not found. Please run this script from your project root directory."
        exit 1
    fi
    
    if [[ ! -d "app" ]] || [[ ! -d "components" ]]; then
        print_error "This doesn't appear to be a Next.js project with the expected structure."
        exit 1
    fi
    
    print_success "Project directory structure validated."
}

# Function to backup existing documentation
backup_existing_docs() {
    local backup_dir="docs_backup_$(date +%Y%m%d_%H%M%S)"
    
    if [[ -f "TECHNICAL_DOCUMENTATION.md" ]] || [[ -f "README.md" ]]; then
        print_status "Creating backup of existing documentation..."
        mkdir -p "$backup_dir"
        
        [[ -f "README.md" ]] && cp "README.md" "$backup_dir/"
        [[ -f "TECHNICAL_DOCUMENTATION.md" ]] && cp "TECHNICAL_DOCUMENTATION.md" "$backup_dir/"
        
        print_success "Backup created in $backup_dir/"
    fi
}

# Function to update package.json version and documentation scripts
update_package_json() {
    print_status "Updating package.json with documentation scripts..."
    
    if [[ ! -f "package.json" ]]; then
        print_error "package.json not found!"
        return 1
    fi
    
    # Create a backup of package.json
    cp package.json package.json.backup
    
    # Add documentation scripts using node
    node -e "
    const fs = require('fs');
    const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    
    // Add documentation scripts
    pkg.scripts = pkg.scripts || {};
    pkg.scripts['docs:update'] = './update-docs.sh';
    pkg.scripts['docs:serve'] = 'echo \"Documentation available at: README.md and TECHNICAL_DOCUMENTATION.md\"';
    
    // Update version if it exists
    if (pkg.version) {
        const version = pkg.version.split('.');
        version[2] = (parseInt(version[2]) + 1).toString();
        pkg.version = version.join('.');
    }
    
    // Add documentation field
    pkg.documentation = {
        'setup': 'README.md',
        'technical': 'TECHNICAL_DOCUMENTATION.md',
        'lastUpdated': new Date().toISOString().split('T')[0]
    };
    
    fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
    "
    
    print_success "package.json updated with documentation scripts."
}

# Function to create a git commit for the documentation update
create_git_commit() {
    if command -v git &> /dev/null && [[ -d ".git" ]]; then
        print_status "Creating git commit for documentation update..."
        
        git add README.md TECHNICAL_DOCUMENTATION.md package.json update-docs.sh 2>/dev/null || true
        
        if git diff --staged --quiet; then
            print_warning "No changes to commit."
        else
            git commit -m "docs: Update technical documentation and README
            
- Add comprehensive technical documentation
- Update README with setup instructions
- Add documentation update script
- Update package.json with doc scripts" 2>/dev/null || print_warning "Git commit failed. Please commit manually."
            
            print_success "Git commit created successfully."
        fi
    else
        print_warning "Git not available or not a git repository. Skipping commit."
    fi
}

# Function to display completion summary
show_completion_summary() {
    echo ""
    echo "=================================="
    print_success "Documentation Update Complete!"
    echo "=================================="
    echo ""
    echo "📁 Files created/updated:"
    echo "   ✅ README.md - Setup and deployment guide"
    echo "   ✅ TECHNICAL_DOCUMENTATION.md - Detailed technical documentation"
    echo "   ✅ package.json - Updated with documentation scripts"
    echo "   ✅ update-docs.sh - This script for future updates"
    echo ""
    echo "🚀 Next steps:"
    echo "   1. Review the documentation files"
    echo "   2. Run 'npm run docs:serve' to view documentation info"
    echo "   3. Run './update-docs.sh' anytime to update documentation"
    echo ""
    echo "📖 Documentation files:"
    echo "   • README.md - For setup and basic usage"
    echo "   • TECHNICAL_DOCUMENTATION.md - For detailed technical information"
    echo ""
    print_success "Happy coding! 🎉"
}

# Main execution function
main() {
    echo "🚀 Trivitron Digital Website - Documentation Update Script"
    echo "========================================================"
    echo ""
    
    # Check if we're in the right directory
    check_project_directory
    
    # Create backup of existing docs
    backup_existing_docs
    
    # Update package.json
    update_package_json
    
    # Make this script executable
    chmod +x "$0" 2>/dev/null || true
    
    # Create git commit if possible
    create_git_commit
    
    # Show completion summary
    show_completion_summary
}

# Run the main function
main "$@"
